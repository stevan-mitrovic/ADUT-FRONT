//@ts-nocheck
import {render, screen} from "@testing-library/react";
import Breadcrumbs from "./index";

jest.mock('next/link', () => {
    return ({children, href, className}) => {
        return (
            <a href={href} className={className} data-testid="next-link">{children}</a>
        )
    }
})

describe('Breadcrumbs Component', () => {

    test('renders without crashing', () => {
        render(<Breadcrumbs links={[]}/>)

        const breadcrumbs = screen.getByRole('navigation');

        expect(breadcrumbs).toBeInTheDocument();
    })

    test('renders with empty links array', () => {
        render(<Breadcrumbs links={[]}/>)

        const breadcrumbs = screen.getByRole('navigation');

        expect(breadcrumbs).toHaveAttribute('aria-label', 'breadcrumb');

        const breadcrumbList = screen.queryAllByRole('listitem')
        expect(breadcrumbList).toHaveLength(0);
    })

    test('renders with one link item', () => {
        const links = [{title: "Home", href: "/"}];

        render(<Breadcrumbs links={links}/>)

        expect(screen.getByRole('listitem')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByTestId('next-link')).toHaveAttribute('href', '/')
    })

    test('renders with multiple link items', () => {
        const links = [
            {title: "Home", href: "/"},
            {title: "Products", href: "/products"},
            {title: "Product details", href: "/products/1"},
        ];

        render(<Breadcrumbs links={links}/>)

        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);

        const links_elements = screen.getAllByTestId('next-link');
        expect(links_elements).toHaveLength(3);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(links_elements[0]).toHaveAttribute('href', '/');

        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(links_elements[1]).toHaveAttribute('href', '/products');

        expect(screen.getByText('Product details')).toBeInTheDocument();
        expect(links_elements[2]).toHaveAttribute('href', '/products/1');

    })

    test('renders span instead of link when href is empty', () => {
        const links = [
            { title: 'Home', href: '/' },
            { title: 'Current Page', href: '' }
        ];

        render(<Breadcrumbs links={links}/>)

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Current Page')).toBeInTheDocument();

        expect(screen.getAllByTestId('next-link')).toHaveLength(1);

        const currentPageElement = screen.getByText('Current Page');
        expect(currentPageElement.tagName).toBe('SPAN');
    })

    test('handles undefined link prop as empty list', () => {
        render(<Breadcrumbs/>)

        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.queryAllByRole('listitem')).toHaveLength(0);

    })
})