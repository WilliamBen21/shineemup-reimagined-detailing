
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

interface DateTimeSelectionProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  availableSlots: string[];
}

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  availableSlots
}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">
        Select Date & Time
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Calendar */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 text-center sm:text-left">
            Choose Date
          </h4>
          <div className="bg-black/60 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/20 shadow-2xl">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date()}
              className="w-full"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-2 relative items-center",
                caption_label: "text-base sm:text-lg font-bold text-white",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 sm:h-8 sm:w-8 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:text-white transition-colors rounded-md",
                nav_button_previous: "absolute left-2",
                nav_button_next: "absolute right-2",
                table: "w-full border-collapse space-y-1",
                head_row: "flex mb-2",
                head_cell: "text-blue-400 rounded-md w-8 h-8 sm:w-10 sm:h-10 font-semibold text-xs sm:text-sm flex items-center justify-center",
                row: "flex w-full mt-2",
                cell: "h-8 w-8 sm:h-10 sm:w-10 text-center text-xs sm:text-sm p-0 relative hover:bg-blue-500/10 rounded-lg transition-colors",
                day: "h-8 w-8 sm:h-10 sm:w-10 p-0 font-medium text-white hover:bg-blue-500/20 hover:text-white focus:bg-blue-500 focus:text-white rounded-lg transition-all duration-200",
                day_selected: "bg-blue-500 text-white font-bold shadow-lg ring-2 ring-blue-400/50",
                day_today: "bg-blue-500/20 text-blue-300 font-semibold",
                day_outside: "text-gray-600 opacity-50",
                day_disabled: "text-gray-700 opacity-30 cursor-not-allowed",
              }}
            />
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 text-center sm:text-left">
            Available Times
          </h4>
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {availableSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedTime === time
                      ? 'bg-blue-500 text-white shadow-lg ring-2 ring-blue-400/50'
                      : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-8 sm:py-12 bg-black/40 rounded-lg sm:rounded-xl border border-gray-700">
              <Calendar className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
              <p className="text-sm sm:text-lg">Please select a date first</p>
            </div>
          )}
          {selectedDate && availableSlots.length === 0 && (
            <div className="text-center text-gray-400 py-8 sm:py-12 bg-black/40 rounded-lg sm:rounded-xl border border-gray-700">
              <Clock className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
              <p className="text-sm sm:text-lg">No available slots for this date</p>
              <p className="text-xs sm:text-sm mt-2">Please try selecting another date</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
