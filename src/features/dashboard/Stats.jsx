import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings?.length || 0;
  const sales =
    bookings?.reduce((acc, booking) => acc + booking.totalPrice, 0) || 0;

  const checkIns = confirmedStays?.length || 0;

  const occupation =
    confirmedStays?.reduce((acc, curr) => {
      return acc + curr.numNights;
    }, 0) || 0;
  const occupationRate = occupation / (numDays * cabinCount) || 0;
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupationRate * 100) + "%"}
      />
    </>
  );
}

export default Stats;
