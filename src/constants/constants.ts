export const CARDS_PER_LOAD = 12;

export const filterOptions = [
    {
        id: 1,
        name: 'Franchise',
        options: [
            { key: 'animal-crossing', name: 'Animal Crossing' },
            { key: 'boxboy', name: 'BoxBoy!' },
            { key: 'kirby', name: 'Kirby' },
            { key: 'metroid', name: 'Metroid' },
            { key: 'monster-hunter', name: 'Monster Hunter' },
            { key: 'powerpros', name: 'Power Pros' },
            { key: 'shovel-knight', name: 'Shovel Knight' },
            { key: 'splatoon', name: 'Splatoon' },
            { key: 'super-smash-bros', name: 'Super Smash Bros.' },
            { key: 'the-legend-of-zelda', name: 'Legend of Zelda' },
            { key: 'yu-gi-oh', name: 'Yu-Gi-Oh!' },
        ],
    },
] as const;

export const RELEASE_DATE = 'Release Date';
export const NEWEST_PRODUCTS = 'Newest products';
export const PRODUCT_NAME_AZ = 'Product Name A-Z';
export const PRODUCT_NAME_ZA = 'Product Name Z-A';

export const sortOptions = [
    {
        id: 1,
        name: RELEASE_DATE
    },
    {
        id: 2,
        name: NEWEST_PRODUCTS
    },
    {
        id: 3,
        name: PRODUCT_NAME_AZ
    },
    {
        id: 4,
        name: PRODUCT_NAME_ZA
    }
] as const;