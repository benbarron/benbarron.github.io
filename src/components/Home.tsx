import React, { Fragment } from 'react';

interface Props {}

export const Home = (props: Props) => {
  return (
    <Fragment>
      <div className='home'>
        <h6 className='name-intro'>Hi, my name is </h6>
        <h1 className='name-heading'>Ben Barron</h1>
        <h2 className='name-subheading'>Creative, Driven, and Innovative Tech Professional</h2>
        <h5 className='short-bio'>
          I am a backend software engineer based in Bentonville, Arkansas with experience building cloud services, CI/CD
          pipelines, and IOT based services.
        </h5>
      </div>
    </Fragment>
  );
};
