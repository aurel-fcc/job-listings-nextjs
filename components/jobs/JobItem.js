import styles from './JobItem.module.scss'
import JobNew from './JobNew'
import JobFeatured from './JobFeatured'


export default function JobItem({job}) {
  return (
    <div className={styles.item} key={job.id}>
      <div className={styles.infos}>
        <div className={styles.logo}>
          <img src={job.logo} />
        </div>

        <div className={styles.itemContent}>
          <div className={styles.company}>
            <p className={styles.companyName}>{job.company}</p>
            <JobNew isNew={job.new} />
            <JobFeatured isFeatured={job.featured} />
          </div>
          <p className={styles.position}>{job.position}</p>
          <ul className={styles.details}>
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <ul className={styles.tags}>
        <li></li>
      </ul>
    </div>
  )
}
