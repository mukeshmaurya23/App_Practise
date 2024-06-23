interface StatusColors {
    textColor: string;
    backColor: string;
}

// Define the type for the statusColors object
interface StatusColorsMapping {
    Upcoming: StatusColors;
    Cancelled: StatusColors;
    Completed: StatusColors;
    Rescheduled: StatusColors;
    [key: string]: StatusColors; // This allows indexing with string keys
}

export type {
    StatusColorsMapping
}