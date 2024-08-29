import { Collapsible } from '../Collapsible';

import type { FeedbackData } from '../../hooks/useFeedback';

interface FormFeedbackProps {
  feedback: FeedbackData;
  className?: string;
}

export const FormFeedback = ({
  feedback,
  className = '',
}: FormFeedbackProps) => (
  <div className={`form-input-error py-3 text-center ${className}`}>
    <Collapsible show={feedback.show} className="py-0.5">
      {feedback.text}
    </Collapsible>
  </div>
);
