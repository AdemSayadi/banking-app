import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/ToltalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = { firstName: 'Adem', lastName: 'Sayadi', email:'sayadiademali335@gmail.com'};

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
            <RightSidebar
               user={loggedIn}
               transactions={[]}
               banks={[{ currentBalance: 420.69},{}]}
            />
        </section>
    )

}

export default Home;