'use client';

import { Call } from '@stream-io/video-react-sdk';

import Loader from './Loader';
import { useGetCalls } from '@/hooks/useGetCalls';
import MeetingCard from './MeetingCard';
import { useRouter } from 'next/navigation';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
    const router = useRouter();
    const { endedCalls, upcomingCalls, isLoading } = useGetCalls();

    const getCalls = () => {
        switch (type) {
            case 'ended':
                return endedCalls;
            case 'upcoming':
                return upcomingCalls;
            default:
                return [];
        }
    };

    const getNoCallsMessage = () => {
        switch (type) {
            case 'ended':
                return 'No Previous Calls';
            case 'upcoming':
                return 'No Upcoming Calls';
            default:
                return '';
        }
    };

    if (isLoading) return <Loader />;

    const calls = getCalls();
    const noCallsMessage = getNoCallsMessage();

    return (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {calls && calls.length > 0 ? (
                calls.map((meeting: Call) => (
                    <MeetingCard
                        key={meeting.id}
                        icon={
                            type === 'ended'
                                ? '/icons/previous.svg'
                                : '/icons/upcoming.svg'
                        }
                        title={
                            meeting.state?.custom?.description ||
                            'No Description'
                        }
                        date={meeting.state?.startsAt?.toLocaleString()}
                        isPreviousMeeting={type === 'ended'}
                        link={`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meeting.id}`}
                        buttonText="Start"
                        handleClick={() => router.push(`/meeting/${meeting.id}`)}
                    />
                ))
            ) : (
                <h1 className="text-2xl font-bold text-white">{noCallsMessage}</h1>
            )}
        </div>
    );
};

export default CallList;
