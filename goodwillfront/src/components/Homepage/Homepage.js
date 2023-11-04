import React, { useEffect, useState } from 'react';
import JobPosting from '../JobPostings/JobPostings';
import PostBoard from '../PostBoard/PostBoard';
import './Homepage.css';

function Homepage() {
    const [messages, setMessages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [companies, setCompanies] = useState(['Goodwill', 'Goodwill', 'JPMC']);

    // Function to handle new message submissions
    const handleNewMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    // Function to handle search query changes
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    //ethan is that guy
    const [items] = useState([
        { id: 1, title:"A.M.P", company:"Goodwill", description:"The purpose of AMP is to help out-of-school young adults between the ages of 18-24 enter a career pathway and attain long-term self-sufficiency prior to program completion.", salaryIncrease:"20k+" },
        { id: 2, title:"Roads2Work", company:"Goodwill", description:"No previous experience is necessary – just bring the desire to be great! The Roads2Work-Franklin County Commercial Driver Training Program is no cost to you and is funded by a grant from Franklin County Department of Job & Family Services, in partnership with Goodwill Columbus and Capital Transportation Academy.", salaryIncrease:"20k+" },
        { id: 3, title:"Full Stack Developer", company:"JPMC", description:"JPMC is an amazing company that provides opportunities for young adults to work with nonprofits on fun and exciting projects that have the potential to effect change and create an impact.", salaryIncrease:"30k+" }
      ]);
      //ethan is that guy
      const filteredItems = items.filter(item =>
        item.title.includes(searchQuery)
      );


    return (
        <div className='page'>
            <div className="column-container">
                <div className="horizontal-container">
                    <div className="header-title">
                        <h1 className='header-text'>Goodwill</h1>
                    </div>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                    </div>
                </div>
                <div className="horizontal-container">
                    <div className="column-container post-container">
                        <PostBoard />
                    </div>
                    <div className="column-container job-container">
                        <div>
                            {filteredItems.map(item => (
                            <div key={item.id}>
                                <JobPosting title={item.title} company={item.company} description={item.description} salaryIncrease={item.salaryIncrease}/>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;

