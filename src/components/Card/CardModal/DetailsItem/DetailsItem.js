import React from 'react';
import { BsChevronCompactDown, BsChevronCompactUp, BsDashLg } from 'react-icons/bs';

import './DetailsItem.css'

const Details = (props) => {
  return (
    <div className='details-item'>
      <div className="details-left">
        {props.left}
      </div>
      {
        typeof (props.right) === 'object' ?
          <div className="details-mid">
            <div
              className="user-icon"
              style={{ backgroundColor: `${props.right.color}` }}
            >
              {props.right?.fname[0] + props.right?.lname[0]}
            </div>
          </div>
          :
          <div className="details-mid">
            <div className="details-card-priority">
              {
                props.right === 'low' ?
                  <div className="card-icon">
                    <BsChevronCompactDown color='green' />
                  </div>
                  :
                  props.right === 'medium' ?
                    <div className="card-icon">
                      <BsDashLg color='orange' />
                    </div>
                    :
                    props.right === 'high' ?
                      <div className="card-icon">
                        <BsChevronCompactUp color='red' />
                      </div>
                      :
                      <></>
              }
            </div>
          </div>
      }
      {
        typeof (props.right) === 'object' ?
          <div className="details-right">
            {props.right?.fname + ' ' + props.right?.lname}
          </div>
          :
          <div className='details-right'>
            {props.right}
          </div>
      }
    </div>
  );
};

export default Details;
