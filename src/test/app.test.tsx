import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import i18n from '../i18n';
import { AppRoutes } from '../app/App';
import { Header } from '../components/Header';

beforeEach(async () => {
  localStorage.setItem('portfolio-language', 'en');
  await i18n.changeLanguage('en');
});

it('renders the software developer identity on the homepage', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppRoutes />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', {
      name: /Emmanouela Tsakalidou/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getAllByText('Software Developer').length
  ).toBeGreaterThan(0);
});

it('filters projects by backend category', async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={['/projects']}>
      <AppRoutes />
    </MemoryRouter>
  );

  await user.click(
    screen.getByRole('button', {
      name: 'Backend',
    })
  );

  expect(
    screen.getByRole('heading', {
      name: 'Video Games API',
    })
  ).toBeInTheDocument();

  expect(
    screen.queryByRole('heading', {
      name: 'Android Contacts App',
    })
  ).not.toBeInTheDocument();
});

it('renders the PriceWise route', () => {
  render(
    <MemoryRouter
      initialEntries={['/projects/pricewise']}
    >
      <AppRoutes />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', {
      name: 'PriceWise',
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText(/primarily manual testing/i)
  ).toBeInTheDocument();
});

it('renders a polished 404 route', () => {
  render(
    <MemoryRouter
      initialEntries={['/not-a-route']}
    >
      <AppRoutes />
    </MemoryRouter>
  );

  expect(
    screen.getByText(/404 · Route not found/i)
  ).toBeInTheDocument();
});

it('opens the mobile navigation', async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const button = screen.getByRole('button', {
    name: 'Open navigation',
  });

  await user.click(button);

  expect(
    screen.getByRole('button', {
      name: 'Close navigation',
    })
  ).toHaveAttribute('aria-expanded', 'true');
});