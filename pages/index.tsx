import { Head } from "next/document";

export default function Home() {
  return (
    <>
      <Head>
        <title>Galvez IT432 Prelims</title>
      </Head>
    <div className='wrapper' >
      <div className='container'>
        <h1>
          System Integration and Architecture in Information Technology
        </h1>
        <div className='content'>
          &emsp;<b>System Architechture</b> refers to the overall design and structure of a computer system, 
          including its software and hardware components. 
          It involves breaking down the system into smaller components, modules, and subsystems, 
          and defining their relationships and interactions. The system architecture serves as a 
          blueprint for the system, ensuring that it meets the desired requirements. 
          The system architecture encompasses the access techniques, protocols, software, and 
          hardware used in the system, all of which contribute to making the system efficient and useful. 
          The goal is to create a solid foundation for building a functional and effective system.
          <br /><br />
          &emsp;<b> System Integration</b>  involves combining the subsystems and components 
          of a system to work together as a cohesive whole. This often involves the integration 
          of different software and hardware components to create an larger and more enhanced system. 
          The main objective of system integration is to ensure that the subsystems can 
          communicate and cooperate with each other effectively, resulting into an overall better system performance.
          <br /><br />
          &emsp;System architecture provides the foundation for system integration by specifying the components 
          and their interactions. System integration, on the other hand, combines the components into a working system. 
          Both system architecture and integration are critical in creating a functional and effective system that 
          can meet the desired outcomes. By combining both system architecture and system integration, 
          a well-designed system can be developed. 
        </div>
      </div>
    </div>
    </>
  )
}
