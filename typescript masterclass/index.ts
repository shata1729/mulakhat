type Properties = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number]

const color = {
    red: [255, 0, 0],
    green: '#00ff00',
    blue: [255, 255, 0],
} satisfies Record<Properties, RGB | string>