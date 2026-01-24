import {render, screen} from '@testing-library/react';
import LoginWindow from "../../src/widgets/LoginWindow/LoginWindow";
import '@testing-library/jest-dom';
import {MemoryRouter} from "react-router-dom";

test('Test for test :D', () => {
    // ARRANGE
    render(<MemoryRouter><LoginWindow/></MemoryRouter>);

    // ACT & ASSERT
    // Например, проверим, что кнопка логина на месте
    const loginElement = screen.getByRole('button', { name: /sign in/i });
    expect(loginElement).toBeInTheDocument();

    expect(loginElement).toHaveClass("sign-in-button");

});