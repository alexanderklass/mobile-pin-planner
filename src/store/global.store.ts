import { create } from 'zustand';
import { IGlobalStore } from '../Types/TypeCollection';

export const globalStore = create<IGlobalStore>((set) => ({
    loginData: {},
    setLoginData: (user: any) => set({ loginData: user }),

    date: new Date(),
    setDate: (newDate) => set({ date: newDate }),
    calendar: false,
    setCalendar: (toggle) => set({ calendar: toggle }),
    currentWeekDay: '',
    setCurrenWeekDay: (weekDay: string) => set({ currentWeekDay: weekDay }),

    bookingModal: false,
    setBookingModal: (bookingModal: boolean) => set({ bookingModal: bookingModal }),
    bookingData: [],
    setBookingData: (data: any[]) => set({ bookingData: data }),

    optionsModal: false,
    setOptionsModal: (toggle) => set({ optionsModal: toggle }),
    optionsData: [],
    setOptionsData: (data: any[]) => set({ optionsData: data }),

    toggleSidebar: false,
    setToggleSidebar: (toggle) => set({ toggleSidebar: toggle }),
    sidebarIndex: 0,
    setSidebarIndex: (index: number) => set({ sidebarIndex: index }),

    notes: {},
    setNotes: (data) => set({ notes: data }),
    notesList: [],
    setNotesList: (data) => set({ notesList: data }),

    gridData: [],
    setGridData: (data) => set({ gridData: data }),
    customerList: [],
    setCustomerList: (data) => set({ customerList: data }),
}));
