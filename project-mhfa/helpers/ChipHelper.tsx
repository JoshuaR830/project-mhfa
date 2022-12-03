export default function getColor(office: string): string
{
    switch (office)
    {
    case 'Nottingham':
        return '#c6da90';
    case 'London':
        return '#df9496';
    case 'Sydney':
        return '#87c7a5';
    default:
        return '';
    }
}