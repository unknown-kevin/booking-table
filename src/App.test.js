import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './Components/BookingForm';
import Header from './Components/header';

const AppComponent = () => (
  <BrowserRouter>
  <App />
  </BrowserRouter>
  );

const renderApp = () => render(<AppComponent />);

test('Renders the Header heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();
});

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
    userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
    expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
});

test('Form is not submitted if any of the fields are invalid', () => {
  render(<BrowserRouter><App /></BrowserRouter>);

  const occasionInput = screen.getByLabelText("Occasion");
  occasionInput.value = "";

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(formik.isSubmitting).toBe(false);

  expect(screen.getByText("Please select an occasion")).toBeInTheDocument();
});

test('Form is submitted if all of the fields are valid', () => {
  renderApp();

  const occasionInput = screen.getByLabelText("Occasion");
  occasionInput.value = "Birthday";

  const guestsInput = screen.getByLabelText("Number of Guests");
  guestsInput.value = "2";

  const dateInput = screen.getByLabelText("Choose Date");
  dateInput.value = "2023-05-15";

  const timesInput = screen.getByLabelText("Choose Time");
  timesInput.value = "12:00 PM";

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(formik.isSubmitting).toBe(true);

  expect(formik.values).toEqual({
    occasion: "Birthday",
    guests: 2,
    date: "2023-05-15",
    times: "12:00 PM",
  });
});