import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

import { render, getByTestId, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<Display />', () => {
  it('App loads with initial state of 0', () => {
    const { getByTestId } = render(<Display />);
    const strikeTest = getByTestId("strike");
    const ballTest = getByTestId("ball");
    expect(strikeTest.textContent).toBe("");
    expect(ballTest.textContent).toBe("");
  });
  it('renders Display', () => {
    const wrapper = render(<Display />);
    wrapper.queryAllByText(/display/i);
  })
})


it("Strike and ball buttons work", () => {
  const { container } = render(<Dashboard />);
  const { displayCont } = render(<Display />);
  const strikeTest = getByTestId(displayCont, "strike");
  const ballTest = getByTestId(getByTestId,"ball");
  const strikeBtn = getByTestId(container, "strikeBtn");
  const ballBtn = getByTestId("ballBtn");

  fireEvent.click(strikeBtn);
  expect(strikeTest.textContent).toBe("1");
  fireEvent.click(ballBtn);
  // expect(ballTest.textContent).toBe("1");
});


