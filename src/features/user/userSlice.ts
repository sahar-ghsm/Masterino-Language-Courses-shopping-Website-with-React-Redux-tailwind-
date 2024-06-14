import { createAsyncThunk, createSlice, AsyncThunk } from '@reduxjs/toolkit';
import { getAddress } from '@/services/apiUsers.ts';

interface AddressData {
  position: Position;
  address: string;
}

interface AddressObject {
  locality: string;
  city: string;
  postcode: string;
  countryName: string;
}

interface Position {
  latitude: number;
  longitude: number;
}

export const fetchAddress: AsyncThunk<AddressData, void, {}> = createAsyncThunk(
  'user/fetchAddress',
  async () => {
    const positionObject: Position = (await getPosition()) as Position;
    const position: Position = {
      latitude: positionObject.latitude,
      longitude: positionObject.longitude,
    };

    const addressObject: AddressObject = await getAddress(position);
    const address = `${addressObject?.locality}, ${addressObject?.city} ${addressObject.postcode}, ${addressObject.countryName}`;
    return { position, address };
  },
);

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const initialState = {
  username: 'sahar',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        (state.status = 'error'),
          (state.error =
            'There was a problem gtting your address. Make sure to fill this field.');
      });
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
