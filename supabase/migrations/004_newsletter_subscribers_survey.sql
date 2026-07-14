-- Onboarding survey answers collected on the thank-you page
alter table public.newsletter_subscribers
  add column if not exists works_independently text,
  add column if not exists current_goal text,
  add column if not exists current_goal_other text,
  add column if not exists topic_interest text,
  add column if not exists topic_interest_other text,
  add column if not exists survey_completed_at timestamptz;

comment on column public.newsletter_subscribers.works_independently is
  'Survey: working-for-yourself (yes|no)';
comment on column public.newsletter_subscribers.current_goal is
  'Survey: current-goal option id';
comment on column public.newsletter_subscribers.current_goal_other is
  'Survey: free text when current_goal = other';
comment on column public.newsletter_subscribers.topic_interest is
  'Survey: topic-interest option id';
comment on column public.newsletter_subscribers.topic_interest_other is
  'Survey: free text when topic_interest = other';
