import { render, screen, fireEvent } from '@testing-library/react';
import { AddButton } from '@/components/addButton';

describe('AddButton', () => {
  describe('初期表示', () => {
    test('ボタン名がAddになっている', () => {
      const { getByRole } = render(<AddButton />);
      const text = getByRole('button', {
        name: 'Add',
      });
      expect(text).toBeInTheDocument();
    });
  });
});
