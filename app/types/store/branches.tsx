export interface IBranch {
    id: number;
    code: string;
    nomi: string;
    manzili: string;
    location: string;
    phone: string;
}

export interface IBranchesState {
    data: IBranch[];
}
