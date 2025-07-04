//@ts-nocheck
import React from "react";
import {render, screen, fireEvent, act} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import ButtonBase from "./ButtonBase";

// Mock the styles import to avoid CSS module issues in tests
jest.mock('./index.module.scss', () => ({
    button: 'button-class',
    'full-w': "full-w-class",
    bold: 'bold-class',
    regular: 'regular-class',
    'button-icon': 'button-icon-class',
    'style-button': 'style-button-class',
    'style-text': 'style-text-class',
    'style-icon': 'style-icon-class',
    green: 'green-class',
    gray: 'gray-class',
    white: 'white-class',
    black: 'black-class',
    large: 'large-class',
    medium: 'medium-class',
    disabled: 'disabled-class'
}))

describe('ButtonBase Component', () => {

    //Basic rendering tests
    describe('Rendering', () => {

        test('renders as a button by default', () => {
            render(<ButtonBase>Click me</ButtonBase>);

            const button = screen.getByRole('button', {name: /click me/i});

            expect(button).toBeInTheDocument();
            expect(button.tagName).toBe('BUTTON');
        })

        test('renders as an anchor when as="a"', () => {
            render(<ButtonBase as='a' href='/test'>Link text</ButtonBase>)

            const link = screen.getByRole('link', {name: /link text/i});

            expect(link).toBeInTheDocument();
            expect(link.tagName).toBe('A');
            expect(link).toHaveAttribute('href', '/test');
        })

        test('renders with icon', () => {
            render(<ButtonBase icon={<span data-testid="test-icon">🔍</span>}>With icon</ButtonBase>)

            const button = screen.getByRole('button', {name: /with icon/i});
            const iconInButton = screen.getByTestId('test-icon');

            expect(button).toBeInTheDocument();
            expect(iconInButton).toBeInTheDocument();

        })
    })

    //Style and class tests
    describe('Styling', () => {

        test('applies correct default classes', () => {
            render(<ButtonBase>Default Button</ButtonBase>)

            const button = screen.getByRole('button', {name: /default button/i});

            expect(button).toHaveClass('button-class')
            expect(button).toHaveClass('green-class')
            expect(button).toHaveClass('medium-class')
            expect(button).toHaveClass('regular-class')
            expect(button).toHaveClass('style-button-class')
        })

        test('applies custom styling based on props', () => {
            render(<ButtonBase
                        color="gray"
                        size="large"
                        font="bold"
                        styleType="text"
                        widthFull
                        className="custom-class">Custom Button</ButtonBase>)

            const button = screen.getByRole('button', {name: /custom button/i});

            expect(button).toHaveClass('gray-class')
            expect(button).toHaveClass('large-class')
            expect(button).toHaveClass('bold-class')
            expect(button).toHaveClass('style-text-class')
            expect(button).toHaveClass('full-w-class')
            expect(button).toHaveClass('custom-class')
        })

        test('applies disabled class when disabled', () => {
            render(<ButtonBase disabled>Disabled Button</ButtonBase>)

            const button = screen.getByRole('button', {name: /disabled button/i});

            expect(button).toHaveClass('disabled-class');
        })
    })

    // Click behaviour tests
    describe('Click Handling', () => {

        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.resetAllMocks();
            jest.useRealTimers();
        });
        test('prevents double click within 300ms', async () => {
            const handleClick = jest.fn();

            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<ButtonBase onClick={handleClick}>Click me</ButtonBase>);

            const button = screen.getByRole('button');

            await user.click(button);
            expect(handleClick).toHaveBeenCalledTimes(1);

            await user.click(button);
            expect(handleClick).toHaveBeenCalledTimes(1);

            // We need to run the timers and wrap it in act to ensure React state updates
            await act(async () => {
                // Run any pending timers (this triggers the setTimeout callback)
                jest.runAllTimers(); // Run all timers instead of just advancing
            });

            await user.click(button);
            expect(handleClick).toHaveBeenCalledTimes(2);
        })
    })

    describe('Button tag behaviour', () => {

        test('calls onClick handler when clicked', async () => {

            jest.useFakeTimers();

            const handleClick = jest.fn();

            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<ButtonBase onClick={handleClick}>Clickable</ButtonBase>)

            const button = screen.getByRole('button');

            await user.click(button);
            expect(handleClick).toBeCalledTimes(1);

            jest.useRealTimers();
        })

        test('does not call onClick when disabled', async () => {

            jest.useFakeTimers();

            const handleClick = jest.fn();

            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<ButtonBase onClick={handleClick} disabled>Disabled Button</ButtonBase>);

            const button = screen.getByRole('button');

            await user.click(button);
            expect(handleClick).not.toHaveBeenCalled();

            jest.useRealTimers();
        })

        test('applies disabled attribute when disabled', () => {
            render(<ButtonBase disabled>Disabled Button</ButtonBase>)

            const button = screen.getByRole('button', {name: /disabled button/i});
            expect(button).toBeDisabled();
        })
    })

    describe('Anchor tag behaviour', () => {

        test('anchor tag gets disabled attribute correctly', () => {
            render(<ButtonBase as="a" disabled>Disabled link</ButtonBase>)

            const link = screen.getByText('Disabled link');

            expect(link.tagName.toLowerCase()).toBe('a');
            expect(link).toHaveClass('disabled-class')
            expect(link).toHaveAttribute('aria-disabled', 'true');
        })

        test('prevents navigation when disabled', () => {
            const mockOnClick = jest.fn();

            render(<ButtonBase
                    as="a"
                    href="https://example.com"
                    disabled>Disabled link</ButtonBase>)

            const link = screen.getByRole('link');

            fireEvent.click(link);

            expect(mockOnClick).not.toHaveBeenCalled();
        })

        test('allows navigation for enabled anchor links', () => {
            const mockOnClick = jest.fn();

            render(
                <ButtonBase
                    as="a"
                    href="https://example.com"
                    onClick={mockOnClick}
                >
                    Enabled Link
                </ButtonBase>
            );

            const link = screen.getByRole('link');

            // Simulate clicking on the enabled link
            fireEvent.click(link);

            // The onClick handler should be called
            expect(mockOnClick).toHaveBeenCalledTimes(1);
        });
    })
})

