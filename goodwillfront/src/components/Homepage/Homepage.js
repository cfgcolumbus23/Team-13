import React, { useEffect, useState } from 'react';
import JobPosting from '../JobPostings/JobPostings';
import PostBoard from '../PostBoard/PostBoard';
import './Homepage.css';

function Homepage() {
    const [messages, setMessages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [companies, setCompanies] = useState(['Goodwill', 'Goodwill', 'JPMC']);

    const [jobs, setJobs] = useState([]); 
    useEffect(() => {
        const fetchJobs = () => {
          fetch('http://127.0.0.1:5000/jobs', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); 
          })
          .then(data => {
            setJobs(data); 
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
        };
    
        fetchJobs(); 
      }, []); 

    
    // Function to handle new message submissions
    const handleNewMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    // Function to handle search query changes
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // let [items, setItems] = useState([
    //     { id: 2, title:"Roads2Work", company:"Goodwill", des:"No previous experience is necessary – just bring the desire to be great! The Roads2Work-Franklin County Commercial Driver Training Program is no cost to you and is funded by a grant from Franklin County Department of Job & Family Services, in partnership with Goodwill Columbus and Capital Transportation Academy.", salaryIncrease:"20k+" },
    //     { id: 3, title:"Full Stack Developer", company:"JPMC", des:"JPMC is an amazing company that provides opportunities for young adults to work with nonprofits on fun and exciting projects that have the potential to effect change and create an impact.", salary:"30k+" }
    //   ]);

    // const addItem = newItem => {
    //     setItems([...items, newItem]);
    // };
    // console.log(jobs)
    // for(let i = 0; i < jobs; i++) {
    //     // addItem(jobs[i])
    //     console.log(jobs[i])
    //     items.push(jobs[i])
    //     setItems(...items);
    // }

    // console.log(items)
      //ethan is that guy
      const filteredItems = jobs.filter(item =>
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
                                <JobPosting title={item.title} company={item.company} description={item.des} salaryIncrease={item.salary}/>
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

