import { Avatar, Card, Col, Flex, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function Hero({ profilePicture, name, profileDetails, bio, contactDetails }) {
    
    const contacts = Object.entries(contactDetails).map(([key, value]) => ({
        label: key,
        description: value,
        link:
            key.toLowerCase().includes('email') ? `mailto:${value}` : 
            key.toLowerCase().includes('phone') || key.toLowerCase().includes('mobile') || key.toLowerCase().includes('whatsapp') 
                ? `tel:${value.replace(/\D/g, '')}` : 
                key.toLowerCase().includes('address') ? undefined : 
            value 
    }));

    return (
        <Flex vertical align="center" justify="center" gap={'middle'} style={{ minHeight: '50vh' }}>
            <Avatar size={64} src={profilePicture} />

            <Flex vertical align="center" style={{padding: '1rem'}}>
                <Title style={{ margin: 0, textAlign: 'center' }}>{name}</Title>
                <Paragraph
                    type="secondary"
                    style={{ margin: 0, textAlign: 'center' }}
                    ellipsis={{ rows: 5, expandable: false, symbol: '...' }}
                >
                    {profileDetails.profession}
                </Paragraph>
                <Paragraph>
                    {profileDetails.nationality.concat(', ').concat(profileDetails.age).concat(' years.')}
                </Paragraph>
                <Paragraph
                    type="secondary"
                    style={{ margin: 0, textAlign: 'center' }}
                    ellipsis={{ rows: 5, expandable: true, symbol: '...' }}
                >
                    {bio}
                </Paragraph>
            </Flex>

            <Flex align="end" justify="center" gap={'large'} style={{padding: '1rem'}} wrap>
                {contacts.map((contact, index) => (
                    <Flex vertical key={index} style={{padding: '1rem 0 1rem 0'}} flex={1}>
                        <Paragraph type="secondary" style={{margin: 0}}>{contact.label}</Paragraph>
                        {contact.link ? (
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>
                                    {contact.description}
                                </Paragraph>
                            </a>
                        ) : (
                            <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>
                                {contact.description}
                            </Paragraph>
                        )}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
