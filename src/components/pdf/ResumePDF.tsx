import GaramondRegular from '../../assets/fonts/EBGaramond/EBGaramond-Regular.ttf';
import GaramondBold from '../../assets/fonts/EBGaramond/EBGaramond-Bold.ttf';
import dayjs from 'dayjs';
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import {
  EDUCATION,
  LANGUAGES,
  PROJECTS,
  SKILLS,
  WORK_EXPERIENCE,
} from '../../common/const';
import { joinValuesToString } from '../../utils/objectUtils';
import { Language } from '../../common/types';

// Fonts
Font.register({
  family: 'Garamond',
  fonts: [
    {
      src: GaramondRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: GaramondBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ],
});

const margins = {
  top: '1.33cm',
  bottom: '1.33cm',
  left: '1.33cm',
  right: '1.33cm',
};

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    fontSize: '10.5pt',
    fontFamily: 'Garamond',
    fontWeight: 'normal',
    paddingTop: margins.top,
    paddingLeft: margins.left,
    paddingRight: margins.right,
    paddingBottom: margins.bottom,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10pt',
    width: '10cm',
    flexGrow: 1,
  },
  title1: {
    fontSize: '16pt',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title2: {
    fontSize: '11pt',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title3: {
    fontSize: '10.5pt',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bold: {
    fontWeight: 'bold',
  },
  header: {
    textAlign: 'center',
  },
  sectionTitle: {
    borderBottom: '1.5pt solid #000',
  },
  subsectionProject: {
    display: 'flex',
    flexDirection: 'row',
  },
  subsectionTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subsectionLocation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  subsectionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: '10pt',
    gap: '10pt',
  },
  list: {
    width: '94%',
  },
  listColumn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    marginLeft: '8pt',
    display: 'flex',
    flexDirection: 'row',
    gap: '8pt',
  },
});

const ListWithColumns = ({
  items,
  itemsPerCol,
}: {
  items: string[];
  itemsPerCol?: number;
}) => {
  const getColumnsItems = (items: string[], itemsPerCol = 5): string[][] => {
    let currentColumn = 0;
    const itemColumns = [];
    const totalItems = items.length;
    const columns = Math.ceil(totalItems / itemsPerCol);

    for (let i = 0; i < columns; i++) {
      itemColumns.push(items.slice(currentColumn, currentColumn + itemsPerCol));
      currentColumn += itemsPerCol;
    }

    return itemColumns;
  };

  return (
    <View style={[styles.list, styles.listColumn]}>
      {getColumnsItems(items, itemsPerCol).map((column, i) => (
        <View key={`column-${i}`}>
          {column.map((skill, index) => (
            <View key={`skill-${index}`} style={[styles.listItem]}>
              <Text>•</Text>
              <Text>{skill}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

// Document Component
const ResumePDF = () => {
  const getLanguages = (languages: Language[]) => {
    return languages.map((language) =>
      joinValuesToString(language, ['language', 'level'])
    );
  };

  return (
    <Document>
      <Page size="LETTER" style={[styles.page]}>
        <View style={[styles.content]}>
          <View style={[styles.header]}>
            <Text style={[styles.title1]}>Jose Bernabe Rios Nuñez</Text>
            <Text style={[styles.bold]}>Full Stack Web Developer</Text>
            <Text>
              Bolivia | jrbernabe@gmail.com | linkedin.com/in/jos017 |
              github.com/Jos017
            </Text>
          </View>
          <View>
            <Text>
              Full-stack Web Developer and JavaScript programmer oriented to the
              frontend side. Core skills programming with JavaScript ES6,
              TypeScript, SQL MongoDB, ExpressJs, ReactJs, NodeJs, HTML & CSS.
              With passion for continuous learning and self-improvement.
              Experienced in collaborating effectively within diverse groups, I
              thrive in fast-paced environments where I can utilize my
              adaptability to quickly acquire new skills. Always eager to
              embrace new challenges and expand my knowledge base.
            </Text>
          </View>
          <View>
            <Text style={[styles.title2, styles.sectionTitle]}>
              Work Experience
            </Text>
            <View style={[styles.subsectionsContainer]}>
              {WORK_EXPERIENCE.map((work, index) => (
                <View key={`exp-${index}`} wrap={false}>
                  <View style={[styles.subsectionTitle]}>
                    <View>
                      <Text style={[styles.title3]}>{work.companyName}</Text>
                      <Text>{work.jobTitle}</Text>
                    </View>
                    <View style={[styles.subsectionLocation]}>
                      <Text>
                        {work.location.city
                          ? `${work.location.city}, ${work.location.country}`
                          : work.location.country}
                      </Text>
                      <Text>
                        {dayjs(work.startDate).format('MMM YYYY')} -{' '}
                        {work.endDate === 'present'
                          ? 'Present'
                          : dayjs(work.endDate).format('MMM YYYY')}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.list]}>
                    {work.workDone.map((job) => (
                      <View
                        key={`done-${work}-${index}`}
                        style={[styles.listItem]}
                      >
                        <Text>•</Text>
                        <Text>{job}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View wrap={false}>
            <Text style={[styles.title2, styles.sectionTitle]}>Education</Text>
            <View style={[styles.subsectionsContainer]}>
              {EDUCATION.map((education, index) => (
                <View key={`edu-${index}`}>
                  <View style={[styles.subsectionTitle]}>
                    <View>
                      <Text style={[styles.title3]}>{education.school}</Text>
                      <Text>{education.studyField}</Text>
                    </View>
                    <View style={[styles.subsectionLocation]}>
                      <Text>
                        {education.location.locale
                          ? `${education.location.country}, ${education.location.locale}`
                          : education.location.country}
                      </Text>
                      <Text>
                        {dayjs(education.startDate).format('MMM YYYY')} -{' '}
                        {education.endDate === 'present'
                          ? 'Present'
                          : dayjs(education.endDate).format('MMM YYYY')}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.list]}>
                    {education.description?.map((additionalInfo) => (
                      <View
                        key={`done-${education}-${index}`}
                        style={[styles.listItem]}
                      >
                        <Text>•</Text>
                        <Text>{additionalInfo}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View wrap={false}>
            <Text style={[styles.title2, styles.sectionTitle]}>Projects</Text>
            <View style={[styles.subsectionsContainer]}>
              {PROJECTS.map((project, index) => (
                <View key={`project-${index}`}>
                  <View style={[styles.subsectionTitle]}>
                    <View style={styles.subsectionProject}>
                      <Text style={[styles.title3]}>{project.title} </Text>
                      <Text>({project.deployUrl})</Text>
                    </View>
                    <View style={[styles.subsectionLocation]}>
                      <Text>{dayjs(project.date).format('MMM YYYY')}</Text>
                    </View>
                  </View>
                  <View style={[styles.list]}>
                    <View style={[styles.listItem]}>
                      <Text>•</Text>
                      <Text>{project.description}</Text>
                    </View>
                    <View style={[styles.listItem]}>
                      <Text>•</Text>
                      <Text>{project.techUsed.join(', ')}</Text>
                    </View>
                    <View style={[styles.listItem]}>
                      <Text>•</Text>
                      <Text>{project.description}</Text>
                    </View>
                    <View style={[styles.listItem]}>
                      <Text>•</Text>
                      <Text>
                        {project.gitHubSecondaryUrl
                          ? `GitHub - Client: (${project.gitHubMainUrl})`
                          : `GitHub: (${project.gitHubMainUrl})`}
                      </Text>
                    </View>
                    {project.gitHubSecondaryUrl && (
                      <View style={[styles.listItem]}>
                        <Text>•</Text>
                        <Text>
                          GitHub - Server: ({project.gitHubSecondaryUrl})
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View wrap={false}>
            <Text style={[styles.title2, styles.sectionTitle]}>Skills</Text>
            <View style={[styles.subsectionsContainer]}>
              <ListWithColumns items={SKILLS} />
            </View>
          </View>
          <View wrap={false}>
            <Text style={[styles.title2, styles.sectionTitle]}>Languages</Text>
            <View style={[styles.subsectionsContainer]}>
              <ListWithColumns
                items={getLanguages(LANGUAGES)}
                itemsPerCol={1}
              />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
