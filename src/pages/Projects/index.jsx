import ProjectSection from '../../components/organisms/ProjectSection';
import styles from '../../styles/pages/Projects.module.scss';
import { useProjectsData } from '@/hooks';
import { Loading } from '../../components/atomics/Loading';

export function Projects() {
  const { projectData, isLoading, error } = useProjectsData();

  if (error) {
    return <div>Error! {error?.messsage}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  // console.log('projectData', projectData);
  const { projects } = projectData || {};


  return (
    <>
      <h1
        className={`text-center text-5xl p-5 pb-0 w-full lg:mt-5 ${styles.textshadow}`}
      >
        Projects
      </h1>
      {projects.map((project, index) => {
        const isRightNarrow = index % 2 !== 0;
        return (
          <ProjectSection
            key={project.id}
            isRightNarrow={isRightNarrow}
            index={index}
            className={styles.section}
            {...project}
          />
        );
      })}
    </>
  );
}
