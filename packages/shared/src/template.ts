export type PublishTemplateResponseDto = {
  id: string;
  isTemplatePublished: boolean;
  templatePublishedAt: string | null;
};

export type TemplateListItemDto = {
  id: string;
  title: string;
  destination: string;
  destinationCountry: string | null;
  travelerCount: number;
  startDate: string;
  endDate: string;
  templateUseCount: number;
  owner: {
    id: string;
    fullName: string;
  };
};

export type CloneTemplateDto = {
  title: string;
  startDate: string;
  endDate: string;
};
