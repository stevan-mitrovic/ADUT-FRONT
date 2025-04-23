import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
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

            // @ts-ignore
            expect(button).toBeInTheDocument();
            expect(button.tagName).toBe('BUTTON');
        })

        test('renders as an anchor when as="a"', () => {
            render(<ButtonBase as='a' href='/test'>Link text</ButtonBase>)

            const link = screen.getByRole('link', {name: /link text/i});

            //@ts-ignore
            expect(link).toBeInTheDocument();
            expect(link.tagName).toBe('A');
            //@ts-ignore
            expect(link).toHaveAttribute('href', '/test');
        })

        test('renders with icon', () => {
            render(<ButtonBase icon={<span data-testid="test-icon">🔍</span>}>With icon</ButtonBase>)
        })
    })
})