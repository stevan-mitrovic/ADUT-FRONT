//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './Button';

const UserIcon = ({isWhite = false}: {isWhite?: boolean}) => {
    return (
        <svg
            width={24}
            height={24}
            viewBox={`0 0 24 24`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke={isWhite ? "white" : "black"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                stroke={isWhite ? "white" : "black"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

/**
 * Button component meta information
 */
const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        as: {
            control: { type: 'select' },
            options: ['button', 'a'],
            description: 'The element type to render',
            defaultValue: { summary: 'button' },
        },
        styleType: {
            control: { type: 'select' },
            options: ['button', 'text', 'icon'],
            description: 'The style type of the button',
            defaultValue: { summary: 'button' },
        },
        color: {
            control: { type: 'select' },
            options: ['green', 'gray', 'white', 'black'],
            description: 'The color theme of the button',
            defaultValue: { summary: 'green' },
        },
        size: {
            control: { type: 'select' },
            options: ['medium', 'large'],
            description: 'The size of the button',
            defaultValue: { summary: 'medium' },
        },
        font: {
            control: { type: 'select' },
            options: ['bold', 'regular'],
            description: 'The font style for the button text',
            defaultValue: { summary: 'regular' },
        },
        widthFull: {
            control: { type: 'boolean' },
            description: 'Whether the button should take up the full width',
            defaultValue: { summary: false },
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'The disabled state of the button',
            defaultValue: { summary: false },
        },
        icon: {
            control: { type: 'boolean' },
            description: 'Toggle to show or hide the icon',
        },
        onClick: { action: 'clicked' },
    },
};

export default meta;

/**
 * Define story types
 */
type Story = StoryObj<typeof Button>;

/**
 * Default story
 */
export const Default: Story = {
    args: {
        children: 'Button',
    },
    render: (args) => (
        <Button {...args}>
            {args.children}
        </Button>
    ),
};

/**
 * Primary button story
 */
export const Primary: Story = {
    args: {
        children: 'Primary Button',
    },
    render: (args) => (
        <Button.Primary {...args}>
            {args.children}
        </Button.Primary>
    ),
};

/**
 * Secondary button story
 */
export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
    },
    render: (args) => (
        <Button.Secondary {...args}>
            {args.children}
        </Button.Secondary>
    ),
};

/**
 * White button story
 */
export const White: Story = {
    args: {
        children: 'White Button',
    },
    render: (args) => (
        <Button.White {...args}>
            {args.children}
        </Button.White>
    ),
};

/**
 * Black button story
 */
export const Black: Story = {
    args: {
        children: 'Black Button',
    },
    render: (args) => (
        <Button.Black {...args}>
            {args.children}
        </Button.Black>
    ),
};

/**
 * Icon default button story
 */
export const DefaultWithIcon: Story = {
    args: {
        children: 'Button with Icon',
        icon: <UserIcon />,
    },
    render: (args) => (
        <Button {...args}>
            {args.children}
        </Button>
    ),
};

/**
 * Icon white button story
 */
export const WhiteWithIcon: Story = {
    args: {
        children: 'Button with Icon',
        icon: <UserIcon />,
    },
    render: (args) => (
        <Button.White {...args}/>
    ),
};

/**
 * Icon-only button story
 */
export const IconOnly: Story = {
    args: {
        icon: <UserIcon />,
    },
    render: (args) => (
        <Button.Icon {...args} />
    ),
};

/**
 * Text as button story
 */
export const TextAsButton: Story = {
    args: {
        children: 'Text as button',
    },
    render: (args) => (
        <Button.Text {...args} />
    ),
};

/**
 * Sizes variation
 */
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button size="medium">Medium Button</Button>
            <Button size="large">Large Button</Button>
        </div>
    ),
};

/**
 * Colors variation
 */
export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button.Primary>Primary Button</Button.Primary>
            <Button.Secondary>Secondary Button</Button.Secondary>
            <Button.White>White Button</Button.White>
            <Button.Black>Black Button</Button.Black>
        </div>
    ),
};

/**
 * Font variations
 */
export const FontVariations: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
            <Button font="regular">Regular Font</Button>
            <Button font="bold">Bold Font</Button>
        </div>
    ),
};

/**
 * Style types variation
 */
export const StyleTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
            <Button styleType="button">Button Style</Button>
            <Button.Text>Text Style</Button.Text>
            <Button.Icon icon={<UserIcon />}/>
        </div>
    ),
};

/**
 * Full width button
 */
export const FullWidth: Story = {
    args: {
        children: 'Full Width Button',
        widthFull: true,
    },
    render: (args) => (
        <div style={{ width: '100%', border: '1px dashed #ccc', padding: '16px' }}>
            <Button {...args} />
        </div>
    ),
};

/**
 * Disabled states
 */
export const DisabledStates: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
            <Button disabled>Disabled Button</Button>
            <Button.Primary disabled>Disabled Primary</Button.Primary>
            <Button.Secondary disabled>Disabled Secondary</Button.Secondary>
            <Button.White disabled>Disabled White</Button.White>
            <Button.Black disabled>Disabled Black</Button.Black>
            <Button.Icon disabled icon={<UserIcon />} />
            <Button.Text disabled>Disabled Text Button</Button.Text>
        </div>
    ),
};

/**
 * As anchor tag
 */
export const AsAnchor: Story = {
    args: {
        as: 'a',
        href: '#',
        children: 'Link Button',
    },
    render: (args) => (
        <Button {...args} />
    ),
};

/**
 * All variants together
 */
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
            <h3>Default Button</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button>Default Button</Button>
                <Button icon={<UserIcon />}>With Icon</Button>
            </div>

            <h3>Primary Buttons</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button.Primary>Primary</Button.Primary>
                <Button.Primary icon={<UserIcon />}>Primary with Icon</Button.Primary>
                <Button.Primary disabled>Disabled</Button.Primary>
            </div>

            <h3>Secondary Buttons</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button.Secondary>Secondary</Button.Secondary>
                <Button.Secondary icon={<UserIcon />}>Secondary with Icon</Button.Secondary>
                <Button.Secondary disabled>Disabled</Button.Secondary>
            </div>

            <h3>White Buttons</h3>
            <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
                <Button.White>White</Button.White>
                <Button.White icon={<UserIcon />}>White with Icon</Button.White>
                <Button.White disabled>Disabled</Button.White>
            </div>

            <h3>Black Buttons</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button.Black>Black</Button.Black>
                <Button.Black icon={<UserIcon isWhite/>}>Black with Icon</Button.Black>
                <Button.Black disabled>Disabled</Button.Black>
            </div>

            <h3>Icon Buttons</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button.Icon icon={<UserIcon />} />
                <Button.Icon icon={<UserIcon />} disabled />
            </div>

            <h3>Text Buttons</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button.Text>Text as button</Button.Text>
                <Button.Text disabled >Disabled</Button.Text>
            </div>
        </div>
    ),
};