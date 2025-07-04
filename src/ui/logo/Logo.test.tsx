//@ts-nocheck
import React from "react";
import {render, screen} from "@testing-library/react";
import Logo from "./index";
import {COMPANY_INFO} from "@/constants/companyInfo";

jest.mock('next/link', () => {
    return({children, href}: {children: React.ReactNode, href: string}) => {
        return <a href={href}>{children}</a>
    }
})

describe('Logo Component', () => {

    test('renders logo image and company name by default', () => {
        render(<Logo/>)

        const logo = screen.getByRole('link');

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('href', '/')

        const logoImage = screen.getByAltText('Adut');
        expect(logoImage).toBeInTheDocument();

        const companyName = screen.getByText(COMPANY_INFO.NAME);
        expect(companyName).toBeInTheDocument();
    })

    test('renders only image when prop short is true', () => {
        render(<Logo short/> )

        const logoImage = screen.getByAltText('Adut');
        expect(logoImage).toBeInTheDocument();

        const companyName = screen.queryByText(COMPANY_INFO.NAME);
        expect(companyName).not.toBeInTheDocument();
    })
});