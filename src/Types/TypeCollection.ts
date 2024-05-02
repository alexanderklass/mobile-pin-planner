export interface IGlobalStore {
    loginData: any;
    setLoginData: (user: any) => void;

    date: Date | string;
    setDate: (newDate: Date | string) => void;
    calendar: boolean;
    setCalendar: (toggle: boolean) => void;
    currentWeekDay: Date | string;
    setCurrenWeekDay: (weekDay: string) => void;

    bookingModal: boolean;
    setBookingModal: (bookingModal: boolean) => void;
    bookingData: any;
    setBookingData: (bookingData: any) => void;

    setOptionsModal: (optionsData: boolean) => void;
    optionsModal: boolean;
    optionsData: any;
    setOptionsData: (optionsData: any) => void;

    toggleSidebar: boolean;
    setToggleSidebar: (toggle: boolean) => void;
    sidebarIndex: number;
    setSidebarIndex: (index: number) => void;

    gridData: IBahn[];
    setGridData: (data: IBahn[]) => void;

    customerList: any;
    setCustomerList: (data: any) => void;
}

export interface IBahn {
    id: number;
    bahn: string;
    time: ITime[];
}

export interface ITime {
    uID: string;
    id?: number;
    customerColor: string;
    date: string;
    customerName: string;
    workerName: string;
    customerNumber: string;
    customerNotes: string;
    startLane: number;
    endLane: number;
    startTime: number;
    endTime: number;
    payedStatus: boolean;
    price: number;
}
