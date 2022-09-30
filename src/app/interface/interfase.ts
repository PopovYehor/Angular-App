export interface Selected {
    [x: string]: any;
    first: string;
    second: string;
}
export interface Count {
    [x: string]: any;
    first: number;
    second: number
}

export interface ConfigRates {
    [x: string]: any;
    base: string,
    date: string,
    moth: object,
    rates: any,
    success: boolean
}

export interface IRequestRate{
    [x: string]: any;
    USD: void,
    EUR: void
}