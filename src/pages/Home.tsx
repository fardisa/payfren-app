import React, { useState, useEffect } from 'react';
import { Paragraph, YStack } from 'tamagui';
import Layout from '../../src/components/Layout';
import supabase from '../lib/supabase';

export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await supabase.auth.getUser();
            setUser(currentUser.data.user);
        };
        fetchUser().then(() => console.log('User fetched'));
    }, []);

    if (!user) {
        return (
            <Layout>
                <YStack justifyContent={'flex-start'} flex={1}>
                    <Paragraph>Loading...</Paragraph>
                </YStack>
            </Layout>
        );
    }

    return (
        <Layout>
            <YStack justifyContent={"center"} alignContent={"center"} flex={1}>
                <Paragraph textAlign={"center"}>Home</Paragraph>
                <Paragraph textAlign={"center"}>Welcome, {user.user_metadata.given_name} {user.user_metadata.family_name}</Paragraph>
            </YStack>
        </Layout>
    );
}
