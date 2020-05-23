import { useState, useEffect } from 'react';
import useMagicLink from 'use-magic-link'

export default function BankStatement() {
    const auth = useMagicLink('pk_test_8659A943739758FA');
    const [statement, setStatement] = useState(null);

    useEffect(() => {
        if (auth.loggedIn) {
            auth.fetch('magicWebhook')
                .then(res => res.json())
                .then((payload) => {
                    setStatement(payload);
                })
        }
    }, [auth.loggedIn])

    if (!auth.loggedIn) {
        return (<div>Not Authorized!</div>)
    }

    if (statement === null) {
        return (<div>Checking your statement ...</div>)
    }

    return (
        <div>
            Hello "{statement.email}", your balance is <b>${statement.balance}</b>.
        </div>
    )
}