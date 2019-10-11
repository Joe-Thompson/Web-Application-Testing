import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';
import App from './App';

afterEach(rtl.cleanup);

test('Render the app', () => {
  const wrapper = rtl.render(<App />);
});

test('checking display state for strike btn', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByRole('strike');
  expect(element).toBeVisible();
});

test('checking for title', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText('Red Sox Score Keeper');
  expect(element).toBeVisible();
});

test('check for image logo', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByAltText('logo');
  expect(element).toBeVisible();
});

test('check for hit btn style', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByRole('hit');
  expect(element).toHaveClass('hitBtn');
});