//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import Logo from './index';


/**
 * The Logo component displays the company brand, with options to show just the icon or
 * include the company name alongside it.
 */
const meta = {
    title: 'Components/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile logo component that links to the homepage and can be displayed in full or compact form.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        short: {
            control: 'boolean',
            description: "If true, only the logo image is displayed; otherwise, the company name is also displayed.",
            defaultValue: false,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            }
        },
    },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default presentation with both logo and company name.
 */
export const Default: Story = {
    args: {
        short: false,
    },
};

/**
 * Compact version showing only the logo image without the company name.
 */
export const ShortVersion: Story = {
    args: {
        short: true,
    },
};