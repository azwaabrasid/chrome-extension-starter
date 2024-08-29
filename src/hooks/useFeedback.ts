import { useReducer, useCallback, useMemo } from 'react';

// Can be used for color schemes and icons display.
type FeedbackType = 'success' | 'error' | 'warn' | 'info' | 'off';

export interface FeedbackData {
  show: boolean;
  type: FeedbackType;
  text: string;
}

export type FeedbackDispatch =
  | { type: 'SET'; payload: { type: FeedbackType; text: string } }
  | { type: 'RESET' };

const feedbackInit = (initial?: FeedbackData) =>
  initial || {
    show: false,
    type: 'off',
    text: '',
  };

const feedbackReducer = (
  prevState: FeedbackData,
  action: FeedbackDispatch,
): FeedbackData => {
  switch (action.type) {
    case 'SET':
      return { ...action.payload, show: true };
    case 'RESET':
      return { ...prevState, show: false };
    default:
      return prevState;
  }
};

export const useFeedback = (initial?: FeedbackData) => {
  const [feedback, dispatchFeedback] = useReducer<
    (prevState: FeedbackData, action: FeedbackDispatch) => FeedbackData,
    FeedbackData | undefined
  >(feedbackReducer, initial, feedbackInit);

  const resetFeedback = useCallback(
    () => dispatchFeedback({ type: 'RESET' }),
    [],
  );

  return useMemo(
    () => ({
      feedback,
      dispatchFeedback,
      resetFeedback,
    }),
    [feedback, resetFeedback],
  );
};
