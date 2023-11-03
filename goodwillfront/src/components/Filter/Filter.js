import React from 'react';
import './Filter.css';

function Filter() {
    return (
        <div class='background border-black'>
            <h4>Filters</h4>
            <form id="filters" action="/filter" method="POST">
                
            <input type="search" placeholder="Search" aria-label="Search">
            </input>
            <div>
                <label class="form-label">Category (Select One)</label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"></input>
                    <label class="form-check-label">One</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"></input>
                    <label class="form-check-label">Two</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"></input>
                    <label class="form-check-label">Three</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"></input>
                    <label class="form-check-label">Four</label>
                </div>
            </div>
            <button id="submit" type="submit">Apply</button>
            </form>
        </div>
    );
}



export default Filter;