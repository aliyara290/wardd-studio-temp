"use client";
import React from 'react'
import Team from '@/components/team/Team';
import Footer from '@/components/home/Footer';

function TeamPage() {
  return (
    <>
        <div className="page__content">
            <Team/>
            <Footer/>
        </div>
    </>
  )
}

export default TeamPage;