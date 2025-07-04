import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Typography from './index';
import { Variant, TextAlign, FontWeight, As } from './types';

const meta: Meta<typeof Typography> = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Typography is a flexible component for consistent text styling across the application. <br/><br/> This component provides a centralized way to manage text appearance while maintaining semantic HTML structure. <br/> It combines predefined styling variants with the ability to override specific properties and the rendered HTML element.',
            },
        },
    },
    argTypes: {
        variant: {
            description: 'Determines the default styling and HTML element (if \'as\' prop is not specified)',
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'p2', 'p3', 'span', 'span2'],
            table: {
                type: { summary: 'Variant' },
                // defaultValue: { summary: 'Required' },
            },
        },
        as: {
            description: 'Overrides the HTML element to render while maintaining styling from the variant.',
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
            table: {
                type: { summary: 'As' },
                // defaultValue: { summary: 'Derived from variant' },
            },
        },
        children: {
            description: 'The content to be rendered inside the typography element. <br/> Can be text, other components, or any valid React node.',
            control: 'text',
            table: {
                type: { summary: 'string React.ReactNode' },
            },
        },
        className: {
            description: 'Additional class names for customization beyond base styling. <br/> Use this to apply custom styles from your own CSS modules or utility classes.',
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
        color: {
            description: 'Text color override, accepts any valid CSS color value. <br/> Examples: HEX (#FF0000), RGB (rgb(255, 0, 0)), named colors (red)',
            control: 'color',
            table: {
                type: { summary: 'string' },
            },
        },
        textAlign: {
            description: 'Text align override, restricted to predefined values for consistency',
            control: 'select',
            options: ['left', 'center', 'right', 'justify'],
            table: {
                type: { summary: 'TextAlign' },
            },
        },
        fontWeight: {
            description: 'Font weight override, restricted to predefined values for consistency',
            control: 'select',
            options: ['400', '500', '600', '700'],
            table: {
                type: { summary: 'FontWeight' },
            },
        },
        fontSize: {
            description: 'Font size override, accepts any valid CSS font-size value',
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Basic examples for each variant
export const Heading1: Story = {
    args: {
        variant: 'h1',
        children: 'Heading 1',
    },
};

export const Heading2: Story = {
    args: {
        variant: 'h2',
        children: 'Heading 2',
    },
};

export const Heading3: Story = {
    args: {
        variant: 'h3',
        children: 'Heading 3',
    },
};

export const Heading4: Story = {
    args: {
        variant: 'h4',
        children: 'Heading 4',
    },
};

export const Heading5: Story = {
    args: {
        variant: 'h5',
        children: 'Heading 5',
    },
};

export const Heading6: Story = {
    args: {
        variant: 'h6',
        children: 'Heading 6',
    },
};

export const Paragraph: Story = {
    args: {
        variant: 'p',
        children: 'This is a standard paragraph with default styling.',
    },
};

export const Paragraph2: Story = {
    args: {
        variant: 'p2',
        children: 'This is a paragraph with p2 styling, typically smaller than standard paragraphs.',
    },
};

export const Paragraph3: Story = {
    args: {
        variant: 'p3',
        children: 'This is a paragraph with p3 styling, typically the smallest paragraph style.',
    },
};

export const Span: Story = {
    args: {
        variant: 'span',
        children: 'This is span text with default styling.',
    },
};

export const Span2: Story = {
    args: {
        variant: 'span2',
        children: 'This is span text with span2 styling, typically smaller than standard spans.',
    },
};

// Advanced examples with customizations
export const CustomizedHeading: Story = {
    args: {
        variant: 'h3',
        color: '#2563eb',
        fontWeight: '700',
        textAlign: 'center',
        children: 'Customized Heading with Blue Color',
    },
};

export const HeadingWithDifferentElement: Story = {
    args: {
        variant: 'h1',
        as: 'h3',
        children: 'This has h1 styling but renders as an h3 element',
    },
    parameters: {
        docs: {
            description: {
                story: 'This example shows how to use the `as` prop to render a different HTML element while keeping the styling from the variant.',
            },
        },
    },
};

export const CustomFontSize: Story = {
    args: {
        variant: 'p',
        fontSize: '1.25rem',
        children: 'This paragraph has a custom font size of 1.25rem',
    },
};

// Showcase of different text alignments
export const TextAlignmentShowcase: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '600px', display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography variant="h4" textAlign="left">
                Left Aligned Heading
            </Typography>
            <Typography variant="h4" textAlign="center">
                Center Aligned Heading
            </Typography>
            <Typography variant="h4" textAlign="right">
                Right Aligned Heading
            </Typography>
            <Typography variant="p" textAlign="justify">
                Justify Aligned Paragraph. This is a longer text to demonstrate justification.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis neque
                eget metus scelerisque tempor. Cras vestibulum libero in massa elementum varius.
            </Typography>
        </div>
    ),
};

// Font weight showcase
export const FontWeightShowcase: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
            <Typography variant="p" fontWeight="400">
                Regular (400) font weight
            </Typography>
            <Typography variant="p" fontWeight="500">
                Medium (500) font weight
            </Typography>
            <Typography variant="p" fontWeight="600">
                Semibold (600) font weight
            </Typography>
            <Typography variant="p" fontWeight="700">
                Bold (700) font weight
            </Typography>
        </div>
    ),
};
