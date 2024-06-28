import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Flex from '../atoms/Flex';
import Stack from '../atoms/Stack';
import Text from '../atoms/Text';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import StandardCard from '../atoms/StandardCard';

const jobs = [
  {
    title: "Software Engineer",
    description: "Develop and maintain web applications.",
    location: "Remote",
  },
  {
    title: "Product Manager",
    description: "Lead the product team and define product roadmap.",
    location: "New York, NY",
  },
  {
    title: "UX Designer",
    description: "Design user-friendly interfaces.",
    location: "San Francisco, CA",
  },
];

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredJobs = jobs.filter(
    job =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (locationFilter === '' || job.location.toLowerCase() === locationFilter.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <Flex justifyContent="center" alignItems="center" height="100vh" bg="lightgray">
        <Stack spacing="md" width="600px">
          <Text as="h1" fontSize="lg" fontWeight="bold" textAlign="center">
            Job Listings
          </Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Input
              placeholder="Search jobs"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              width="70%"
            />
            <Button variant="primary" size="small" onClick={() => {}}>
              Search
            </Button>
          </Flex>
          <Input
            placeholder="Filter by location"
            value={locationFilter}
            onChange={e => setLocationFilter(e.target.value)}
          />
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <StandardCard key={index}>
                <Text as="h2" fontSize="md" fontWeight="bold">{job.title}</Text>
                <Text>{job.description}</Text>
                <Text>{job.location}</Text>
              </StandardCard>
            ))
          ) : (
            <Text>No jobs found</Text>
          )}
        </Stack>
      </Flex>
    </ThemeProvider>
  );
};

export default JobListing;
