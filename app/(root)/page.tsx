import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/ToltalBalanceBox";

const Home = () => {
    const loggedIn = { firstName: 'Adem' };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                      type="greeting"
                      title="Hello,"
                      user={loggedIn?.firstName || 'guest'}
                      subtext={"Access and manage your account and transactions efficiently."}
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.00}

                    />


                </header>
            </div>
        </section>
    )

}

export default Home;