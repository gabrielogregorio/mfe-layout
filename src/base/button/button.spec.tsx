import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@/base/button';

describe('<Button />', () => {
  it('should render component with children', () => {
    render(<Button onClick={jest.fn}>Mock Content</Button>);
    expect(screen.getByRole('button', { name: 'Mock Content' })).toBeInTheDocument();
  });

  it('should be clicked', () => {
    const func = jest.fn();
    render(<Button onClick={func}>Conteudo2</Button>);

    const button = screen.getByRole('button');
    expect(func).toHaveBeenCalledTimes(0);

    fireEvent.click(button);
    fireEvent.click(button);

    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should be snapshot', () => {
    const { container } = render(<Button onClick={jest.fn}>Conteudo2</Button>);

    expect(container).toMatchSnapshot();
  });
});
