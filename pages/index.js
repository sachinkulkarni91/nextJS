import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Batches from './components/Batches';
import NewCourse from './components/NewCourse';
import Base from './components/Base';
import New_Batch from './components/New_Batch';
import { Router, useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <React.Fragment>
      <header>
        <Base></Base>

      </header>





    </React.Fragment>
  )
}
