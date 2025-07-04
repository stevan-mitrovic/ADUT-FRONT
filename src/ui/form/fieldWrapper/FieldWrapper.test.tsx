//@ts-nocheck
import React from "react";
import {render, screen} from "@testing-library/react";
import FieldWrapper from "./index";

jest.mock('./index.module.scss', () => ({
    fieldWrapper: 'field-wrapper-class',
    error: 'error-class',
    left: 'left-class',
    center: 'center-class',
    label: 'label-class'
}))

describe('FieldWrapper Component', () => {

    const MockInputField = () => <input data-testid={"mock-input"}/>

    test('renders with required props and default values', () => {
        const {container} = render(<FieldWrapper name="testField" label="Test label">
            <MockInputField/>
        </FieldWrapper>)

        const label = screen.getByText('Test label')
        expect(label).toBeInTheDocument();
        expect(label.tagName).toBe("LABEL");

        const children = screen.getByTestId("mock-input");
        expect(children).toBeInTheDocument();

        expect(container.firstChild).toHaveClass("field-wrapper-class");
        expect(container.firstChild).toHaveClass("left-class");
    })

    test('renders with center alignment', () => {
        const {container} = render(<FieldWrapper name="testField" label="Test label" textAlign="center">
            <MockInputField/>
        </FieldWrapper>)

        expect(container.firstChild).toHaveClass("center-class");
    })

    test('displays error message when provided', () => {
        render(<FieldWrapper name="testField" label="Test label" error="Error message">
            <MockInputField/>
        </FieldWrapper>)

        const errorText = screen.getByText("Error message");

        expect(errorText).toBeInTheDocument();
        expect(errorText.tagName).toBe('SPAN');
        expect(errorText).toHaveClass('error-class')
    })

    test('associates label with input field using htmlFor', () => {
        render(
            <FieldWrapper name="testField" label="Test Label" textAlign="left">
                <input id="testField" data-testid="actual-input" />
            </FieldWrapper>
        );

        const label = screen.getByText("Test Label");
        expect(label).toHaveAttribute('for', 'testField');

        const input = screen.getByTestId('actual-input');
        expect(input).toHaveAttribute('id', 'testField');

    })
})