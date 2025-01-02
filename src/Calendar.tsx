import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import './Calendar.css';
import { ref, onValue, set } from 'firebase/database';
import { database } from './firebase';

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface DayState {
    isSelected: boolean;
    isRed: boolean;
}

const Calendar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
    const [dayStates, setDayStates] = useState<{ [key: string]: DayState }>({});

    useEffect(() => {
        const dayStatesRef = ref(database, 'dayStates');
        onValue(dayStatesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setDayStates(data);
            }
        });
    }, []);

    const handleDayClick = (month: number, day: number) => {
        const key = `${month}-${day}`;
        const newDayStates = {
            ...dayStates,
            [key]: {
                isSelected: !dayStates[key]?.isRed && !dayStates[key]?.isSelected,
                isRed: false
            }
        };
        setDayStates(newDayStates);
        set(ref(database, 'dayStates'), newDayStates);
    };

    const handleDayDoubleClick = (month: number, day: number) => {
        const key = `${month}-${day}`;
        const newDayStates = {
            ...dayStates,
            [key]: {
                isSelected: false,
                isRed: true
            }
        };
        setDayStates(newDayStates);
        set(ref(database, 'dayStates'), newDayStates);
    };

    const getDayOfWeek = (day: number, month: number, year: number) => {
        const date = new Date(year, month, day);
        return weekDays[date.getDay()];
    };

    const navigateMonth = (direction: 'prev' | 'next') => {
        setCurrentMonthIndex(prev => {
            if (direction === 'next') {
                return prev === 11 ? 0 : prev + 1;
            }
            return prev === 0 ? 11 : prev - 1;
        });
    };

    const month = months[currentMonthIndex];
    const daysInCurrentMonth = new Date(2025, currentMonthIndex + 1, 0).getDate();
    const firstDayOfMonth = new Date(2025, currentMonthIndex, 1).getDay();

    return (
        <div className="calendar-container">
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div className="calendar-header">
                <button onClick={() => navigateMonth('prev')}>&larr;</button>
                <h2>{month} 2025</h2>
                <button onClick={() => navigateMonth('next')}>&rarr;</button>
            </div>
            <div className="weekdays">
                {weekDays.map(day => (
                    <div key={day} className="weekday">{day}</div>
                ))}
            </div>
            <div className="days-grid">
                {[...Array(firstDayOfMonth)].map((_, index) => (
                    <div key={`empty-${index}`} className="day empty"></div>
                ))}
                {Array.from({ length: daysInCurrentMonth }, (_, index) => {
                    const day = index + 1;
                    const key = `${currentMonthIndex + 1}-${day}`;
                    const state = dayStates[key];
                    return (
                        <div
                            key={day}
                            className={`day ${state?.isSelected ? 'selected' : ''} ${state?.isRed ? 'red' : ''}`}
                            onClick={() => handleDayClick(currentMonthIndex + 1, day)}
                            onDoubleClick={() => handleDayDoubleClick(currentMonthIndex + 1, day)}
                            title={getDayOfWeek(day, currentMonthIndex, 2025)}
                        >
                            <span className="day-number">{day}</span>
                            <span className="day-name">
                                {getDayOfWeek(day, currentMonthIndex, 2025)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;