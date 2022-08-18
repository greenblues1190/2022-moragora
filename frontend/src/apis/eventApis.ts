import request from 'utils/request';
import { MeetingEvent } from 'types/eventType';
import { User } from 'types/userType';

export const getEventsApi =
  (meetingId: string, accessToken?: User['accessToken']) => () =>
    request<{ events: MeetingEvent[] }>(`/meetings/${meetingId}/events`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

export const createEventsApi =
  (meetingId: string, accessToken?: User['accessToken']) =>
  (payload: { events: MeetingEvent[] }) =>
    request<{}>(`/meetings/${meetingId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

export const deleteEventsApi =
  (meetingId: string, accessToken?: User['accessToken']) =>
  (payload: { dates: string[] }) =>
    request<{}>(`/meetings/${meetingId}/events`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

export const getUpcomingEventApi =
  (meetingId: string, accessToken?: User['accessToken']) => () =>
    request<MeetingEvent>(`/meetings/${meetingId}/events/upcoming`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
