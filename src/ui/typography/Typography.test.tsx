//@ts-nocheck
import React from "react";
import {render, screen} from "@testing-library/react";
import Typography from "./index";

jest.mock('./index.module.scss', () => ({
    typography: 'typography-class',
    h1: 'h1-class',
    h2: 'h2-class',
    h3: 'h3-class',
    h4: 'h4-class',
    h5: 'h5-class',
    h6: 'h6-class',
    p: 'p-class',
    p2: 'p2-class',
    p3: 'p3-class',
    span: 'span-class',
    span2: 'span2-class'
}))

describe('Typography Component', () => {

    describe('Rendering', () => {
        test.each([
            ['h1', 'h1'],
            ['h2', 'h2'],
            ['h3', 'h3'],
            ['h4', 'h4'],
            ['h5', 'h5'],
            ['h6', 'h6'],
            ['p', 'p'],
            ['p2', 'p'],
            ['p3', 'p'],
            ['span', 'span'],
            ['span2', 'span']
        ])('renders %s variant as %s HTML element', (variant, expectedElement) => {
            render(<Typography variant={variant}>Test Content</Typography>)

            const typography = screen.getByText("Test Content");

            expect(typography.tagName.toLocaleLowerCase()).toBe(expectedElement);
            expect(typography).toHaveClass('typography-class');
            expect(typography).toHaveClass(`${variant}-class`);
        })

        test.each([
            ['h1', 'span'],
            ['h2', 'p'],
            ['p', 'h3'],
            ['span', 'h4'],
            ['p2', 'h5'],
        ])('renders %s variant as %s element when using "as" prop', (variant, as) => {
            render(<Typography variant={variant} as={as}>Test Content</Typography>)

            const typography = screen.getByText("Test Content");

            expect(typography.tagName.toLowerCase()).toBe(as);
            expect(typography).toHaveClass(`${variant}-class`)
        })

        test('renders complex children correctly', () => {
            render(<Typography variant="h2">
                Text with <strong>bold</strong> and <em>italic</em>
            </Typography>)

            const typography = screen.getByText('Text with', {exact: false})
            expect(typography).toBeInTheDocument();

            const boldText = screen.getByText('bold');
            expect(boldText).toBeInTheDocument();
            expect(boldText.tagName).toBe('STRONG');

            const italicText = screen.getByText('italic');
            expect(italicText).toBeInTheDocument();
            expect(italicText.tagName).toBe('EM');
        })
    })

    describe('Styling', () => {

        test('applies custom class', () => {
            render(<Typography variant='h1' className="custom-class">Test Content</Typography>)

            const typography = screen.getByText("Test Content");

            expect(typography).toHaveClass('custom-class')
        })

        test('applies custom style properties', () => {
            render(<Typography variant='p'
                               color="red"
                                textAlign="center"
                                fontWeight="700"
                                fontSize="24"
                                >Test Content</Typography>)

            const typography = screen.getByText("Test Content");

            expect(typography).toHaveStyle({
                color: "red",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "24"
            })

        })

        test('applies partial style properties', () => {
            render(<Typography variant="h3" color="blue">Partial Styled Text</Typography>)

            const typography = screen.getByText("Partial Styled Text");

            expect(typography).toHaveStyle({
                color: "blue"
            })
            expect(typography).not.toHaveStyle({
                textAlign: expect.anything(),
                fontWeight: expect.anything(),
                fontSize: expect.anything()
            })
        })
    })


})