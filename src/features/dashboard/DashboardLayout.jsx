import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashBoardLayout() {
  const { bookings, isLoading1 } = useRecentBookings();
  const { stays, isLoading2 } = useRecentStays();
  const isLoading = isLoading1 || isLoading2;
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart Stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashBoardLayout;
