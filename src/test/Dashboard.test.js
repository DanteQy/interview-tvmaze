//import Dashboard from '@/components/Dashboard.vue';
//import { shallowMount } from '@vue/test-utils';

// describe('Dashboard.vue', () => {
//   it('renders items belonging to the Adventure genre', async () => {
//     const shows = [
//       { title: 'Show1', genres: ['Adventure'] },
//       { title: 'Show2', genres: ['Comedy'] },
//       // Add more shows as needed for your test case
//     ];

//     jest.mock('@/composables/useGetShow', () => ({
//       useGetShow: jest.fn().mockReturnValue({
//         getShows: jest.fn().mockResolvedValue(shows),
//       }),
//     }));

//     const wrapper = shallowMount(Dashboard);
//     await wrapper.vm.$nextTick(); // Wait for the data to be loaded

//     // Check if there is at least one item belonging to the Adventure genre
//     const adventureGenreItems = wrapper.findAll('.dashboard [data-test="adventure-genre-item"]');
//     expect(adventureGenreItems.length).toBeGreaterThan(0);
//   });
// });
