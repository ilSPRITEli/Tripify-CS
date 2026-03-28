-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('GOOGLE');

-- CreateEnum
CREATE TYPE "TripStatus" AS ENUM ('DRAFT', 'ACTIVE', 'COMPLETED', 'ENDED_EARLY', 'ARCHIVED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TripVisibility" AS ENUM ('PRIVATE', 'SHARED', 'PUBLIC_TEMPLATE');

-- CreateEnum
CREATE TYPE "TripMemberRole" AS ENUM ('OWNER', 'EDITOR', 'VIEWER');

-- CreateEnum
CREATE TYPE "InvitationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'EXPIRED', 'REVOKED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('TRIP_INVITATION_RECEIVED', 'TRIP_INVITATION_ACCEPTED', 'TRIP_INVITATION_DECLINED', 'TRIP_MEMBER_JOINED', 'TRIP_MEMBER_REMOVED', 'TRIP_UPDATED', 'ITINERARY_REMINDER', 'TRIP_STARTED', 'TRIP_ENDED', 'TEMPLATE_PUBLISHED', 'ACHIEVEMENT_UNLOCKED', 'SYSTEM');

-- CreateEnum
CREATE TYPE "NotificationChannel" AS ENUM ('IN_APP', 'WEB_PUSH');

-- CreateEnum
CREATE TYPE "NotificationDeliveryStatus" AS ENUM ('PENDING', 'SENT', 'FAILED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "ReminderStatus" AS ENUM ('PENDING', 'PROCESSING', 'SENT', 'FAILED', 'CANCELLED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "ReminderType" AS ENUM ('TRIP_START', 'TRIP_END', 'ITINERARY_START', 'ITINERARY_CUSTOM');

-- CreateEnum
CREATE TYPE "TemplateStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "RatingTargetType" AS ENUM ('TRIP', 'TEMPLATE');

-- CreateEnum
CREATE TYPE "AchievementCategory" AS ENUM ('TRIP_COUNT', 'COUNTRY_COUNT', 'TEMPLATE_PUBLISH_COUNT', 'TEMPLATE_USE_COUNT', 'COMPLETED_TRIP_COUNT', 'MEMBER_TRIP_COUNT', 'SOCIAL', 'SPECIAL');

-- CreateEnum
CREATE TYPE "AchievementConditionType" AS ENUM ('TOTAL_TRIPS_CREATED', 'TOTAL_TRIPS_COMPLETED', 'TOTAL_COUNTRIES_VISITED', 'TOTAL_TEMPLATES_PUBLISHED', 'TOTAL_TEMPLATE_USES', 'TOTAL_PUBLIC_TRIPS_SHARED', 'TOTAL_JOINED_TRIPS');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "supabaseAuthId" TEXT NOT NULL,
    "provider" "AuthProvider" NOT NULL DEFAULT 'GOOGLE',
    "providerSubject" TEXT,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "username" TEXT,
    "bio" TEXT,
    "country" TEXT,
    "isProfilePublic" BOOLEAN NOT NULL DEFAULT true,
    "lastSeenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "destination" TEXT NOT NULL,
    "destinationCountry" TEXT,
    "destinationCity" TEXT,
    "budgetTotal" DECIMAL(12,2),
    "travelerCount" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'Asia/Bangkok',
    "coverImageUrl" TEXT,
    "status" "TripStatus" NOT NULL DEFAULT 'DRAFT',
    "visibility" "TripVisibility" NOT NULL DEFAULT 'PRIVATE',
    "endedAt" TIMESTAMP(3),
    "endedByUserId" TEXT,
    "isTemplatePublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripMember" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "TripMemberRole" NOT NULL DEFAULT 'VIEWER',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "addedByUserId" TEXT,
    "canRate" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TripMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripDay" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItineraryItem" (
    "id" TEXT NOT NULL,
    "tripDayId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "placeName" TEXT,
    "placeAddress" TEXT,
    "country" TEXT,
    "city" TEXT,
    "latitude" DECIMAL(10,7),
    "longitude" DECIMAL(10,7),
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "estimatedCost" DECIMAL(12,2),
    "currency" TEXT DEFAULT 'THB',
    "note" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdByUserId" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItineraryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripInvitation" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "inviterId" TEXT NOT NULL,
    "inviteeUserId" TEXT,
    "inviteeEmail" TEXT,
    "inviteCode" TEXT NOT NULL,
    "message" TEXT,
    "status" "InvitationStatus" NOT NULL DEFAULT 'PENDING',
    "expiresAt" TIMESTAMP(3),
    "respondedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicTemplate" (
    "id" TEXT NOT NULL,
    "sourceTripId" TEXT NOT NULL,
    "publishedById" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "destination" TEXT NOT NULL,
    "destinationCountry" TEXT,
    "destinationCity" TEXT,
    "estimatedBudget" DECIMAL(12,2),
    "totalDays" INTEGER NOT NULL,
    "coverImageUrl" TEXT,
    "status" "TemplateStatus" NOT NULL DEFAULT 'PUBLISHED',
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "cloneCount" INTEGER NOT NULL DEFAULT 0,
    "averageRating" DECIMAL(3,2),
    "ratingCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PublicTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateDay" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemplateDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateItem" (
    "id" TEXT NOT NULL,
    "templateDayId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "placeName" TEXT,
    "placeAddress" TEXT,
    "country" TEXT,
    "city" TEXT,
    "latitude" DECIMAL(10,7),
    "longitude" DECIMAL(10,7),
    "suggestedStartOffsetMin" INTEGER,
    "suggestedEndOffsetMin" INTEGER,
    "estimatedCost" DECIMAL(12,2),
    "currency" TEXT DEFAULT 'THB',
    "note" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemplateItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tripId" TEXT,
    "templateId" TEXT,
    "targetType" "RatingTargetType" NOT NULL,
    "score" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchievementDefinition" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "category" "AchievementCategory" NOT NULL,
    "conditionType" "AchievementConditionType" NOT NULL,
    "targetValue" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AchievementDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAchievementProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "currentValue" INTEGER NOT NULL DEFAULT 0,
    "lastEvaluatedAt" TIMESTAMP(3),
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAchievementProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAchievement" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "unlockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notificationId" TEXT,

    CONSTRAINT "UserAchievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tripId" TEXT,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "dataJson" JSONB,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationDelivery" (
    "id" TEXT NOT NULL,
    "notificationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "channel" "NotificationChannel" NOT NULL,
    "status" "NotificationDeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "errorMessage" TEXT,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificationDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PushSubscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "p256dh" TEXT NOT NULL,
    "auth" TEXT NOT NULL,
    "userAgent" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastUsedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PushSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduledReminder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "itineraryItemId" TEXT,
    "type" "ReminderType" NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "scheduledAtUtc" TIMESTAMP(3) NOT NULL,
    "sentAt" TIMESTAMP(3),
    "status" "ReminderStatus" NOT NULL DEFAULT 'PENDING',
    "dedupeKey" TEXT NOT NULL,
    "payloadJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScheduledReminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripCountryVisit" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT,
    "countedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripCountryVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateCloneEvent" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "clonedByUserId" TEXT NOT NULL,
    "createdTripId" TEXT,
    "clonedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TemplateCloneEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripActivityLog" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "actorUserId" TEXT,
    "action" TEXT NOT NULL,
    "targetType" TEXT,
    "targetId" TEXT,
    "metadataJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_supabaseAuthId_key" ON "User"("supabaseAuthId");

-- CreateIndex
CREATE UNIQUE INDEX "User_providerSubject_key" ON "User"("providerSubject");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "Trip_ownerId_idx" ON "Trip"("ownerId");

-- CreateIndex
CREATE INDEX "Trip_status_idx" ON "Trip"("status");

-- CreateIndex
CREATE INDEX "Trip_visibility_idx" ON "Trip"("visibility");

-- CreateIndex
CREATE INDEX "Trip_startDate_endDate_idx" ON "Trip"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "TripMember_userId_idx" ON "TripMember"("userId");

-- CreateIndex
CREATE INDEX "TripMember_tripId_role_idx" ON "TripMember"("tripId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "TripMember_tripId_userId_key" ON "TripMember"("tripId", "userId");

-- CreateIndex
CREATE INDEX "TripDay_tripId_date_idx" ON "TripDay"("tripId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "TripDay_tripId_dayNumber_key" ON "TripDay"("tripId", "dayNumber");

-- CreateIndex
CREATE INDEX "ItineraryItem_tripDayId_sortOrder_idx" ON "ItineraryItem"("tripDayId", "sortOrder");

-- CreateIndex
CREATE INDEX "ItineraryItem_startTime_idx" ON "ItineraryItem"("startTime");

-- CreateIndex
CREATE UNIQUE INDEX "TripInvitation_inviteCode_key" ON "TripInvitation"("inviteCode");

-- CreateIndex
CREATE INDEX "TripInvitation_tripId_idx" ON "TripInvitation"("tripId");

-- CreateIndex
CREATE INDEX "TripInvitation_inviteeUserId_idx" ON "TripInvitation"("inviteeUserId");

-- CreateIndex
CREATE INDEX "TripInvitation_inviteeEmail_idx" ON "TripInvitation"("inviteeEmail");

-- CreateIndex
CREATE INDEX "TripInvitation_status_idx" ON "TripInvitation"("status");

-- CreateIndex
CREATE UNIQUE INDEX "PublicTemplate_sourceTripId_key" ON "PublicTemplate"("sourceTripId");

-- CreateIndex
CREATE UNIQUE INDEX "PublicTemplate_slug_key" ON "PublicTemplate"("slug");

-- CreateIndex
CREATE INDEX "PublicTemplate_status_isActive_idx" ON "PublicTemplate"("status", "isActive");

-- CreateIndex
CREATE INDEX "PublicTemplate_destinationCountry_idx" ON "PublicTemplate"("destinationCountry");

-- CreateIndex
CREATE INDEX "PublicTemplate_isFeatured_idx" ON "PublicTemplate"("isFeatured");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateDay_templateId_dayNumber_key" ON "TemplateDay"("templateId", "dayNumber");

-- CreateIndex
CREATE INDEX "TemplateItem_templateDayId_sortOrder_idx" ON "TemplateItem"("templateDayId", "sortOrder");

-- CreateIndex
CREATE INDEX "Rating_userId_idx" ON "Rating"("userId");

-- CreateIndex
CREATE INDEX "Rating_tripId_idx" ON "Rating"("tripId");

-- CreateIndex
CREATE INDEX "Rating_templateId_idx" ON "Rating"("templateId");

-- CreateIndex
CREATE UNIQUE INDEX "AchievementDefinition_code_key" ON "AchievementDefinition"("code");

-- CreateIndex
CREATE INDEX "UserAchievementProgress_userId_isCompleted_idx" ON "UserAchievementProgress"("userId", "isCompleted");

-- CreateIndex
CREATE UNIQUE INDEX "UserAchievementProgress_userId_achievementId_key" ON "UserAchievementProgress"("userId", "achievementId");

-- CreateIndex
CREATE INDEX "UserAchievement_userId_unlockedAt_idx" ON "UserAchievement"("userId", "unlockedAt");

-- CreateIndex
CREATE UNIQUE INDEX "UserAchievement_userId_achievementId_key" ON "UserAchievement"("userId", "achievementId");

-- CreateIndex
CREATE INDEX "Notification_userId_isRead_createdAt_idx" ON "Notification"("userId", "isRead", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_tripId_idx" ON "Notification"("tripId");

-- CreateIndex
CREATE INDEX "NotificationDelivery_notificationId_idx" ON "NotificationDelivery"("notificationId");

-- CreateIndex
CREATE INDEX "NotificationDelivery_userId_channel_status_idx" ON "NotificationDelivery"("userId", "channel", "status");

-- CreateIndex
CREATE UNIQUE INDEX "PushSubscription_endpoint_key" ON "PushSubscription"("endpoint");

-- CreateIndex
CREATE INDEX "PushSubscription_userId_isActive_idx" ON "PushSubscription"("userId", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledReminder_dedupeKey_key" ON "ScheduledReminder"("dedupeKey");

-- CreateIndex
CREATE INDEX "ScheduledReminder_status_scheduledAtUtc_idx" ON "ScheduledReminder"("status", "scheduledAtUtc");

-- CreateIndex
CREATE INDEX "ScheduledReminder_userId_idx" ON "ScheduledReminder"("userId");

-- CreateIndex
CREATE INDEX "ScheduledReminder_tripId_idx" ON "ScheduledReminder"("tripId");

-- CreateIndex
CREATE INDEX "TripCountryVisit_userId_country_idx" ON "TripCountryVisit"("userId", "country");

-- CreateIndex
CREATE UNIQUE INDEX "TripCountryVisit_tripId_userId_country_key" ON "TripCountryVisit"("tripId", "userId", "country");

-- CreateIndex
CREATE INDEX "TemplateCloneEvent_templateId_clonedAt_idx" ON "TemplateCloneEvent"("templateId", "clonedAt");

-- CreateIndex
CREATE INDEX "TemplateCloneEvent_clonedByUserId_clonedAt_idx" ON "TemplateCloneEvent"("clonedByUserId", "clonedAt");

-- CreateIndex
CREATE INDEX "TripActivityLog_tripId_createdAt_idx" ON "TripActivityLog"("tripId", "createdAt");

-- CreateIndex
CREATE INDEX "TripActivityLog_actorUserId_idx" ON "TripActivityLog"("actorUserId");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripMember" ADD CONSTRAINT "TripMember_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripMember" ADD CONSTRAINT "TripMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripDay" ADD CONSTRAINT "TripDay_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItineraryItem" ADD CONSTRAINT "ItineraryItem_tripDayId_fkey" FOREIGN KEY ("tripDayId") REFERENCES "TripDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripInvitation" ADD CONSTRAINT "TripInvitation_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripInvitation" ADD CONSTRAINT "TripInvitation_inviterId_fkey" FOREIGN KEY ("inviterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripInvitation" ADD CONSTRAINT "TripInvitation_inviteeUserId_fkey" FOREIGN KEY ("inviteeUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicTemplate" ADD CONSTRAINT "PublicTemplate_sourceTripId_fkey" FOREIGN KEY ("sourceTripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicTemplate" ADD CONSTRAINT "PublicTemplate_publishedById_fkey" FOREIGN KEY ("publishedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateDay" ADD CONSTRAINT "TemplateDay_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "PublicTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateItem" ADD CONSTRAINT "TemplateItem_templateDayId_fkey" FOREIGN KEY ("templateDayId") REFERENCES "TemplateDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "PublicTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievementProgress" ADD CONSTRAINT "UserAchievementProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievementProgress" ADD CONSTRAINT "UserAchievementProgress_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "AchievementDefinition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "AchievementDefinition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationDelivery" ADD CONSTRAINT "NotificationDelivery_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationDelivery" ADD CONSTRAINT "NotificationDelivery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PushSubscription" ADD CONSTRAINT "PushSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduledReminder" ADD CONSTRAINT "ScheduledReminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduledReminder" ADD CONSTRAINT "ScheduledReminder_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduledReminder" ADD CONSTRAINT "ScheduledReminder_itineraryItemId_fkey" FOREIGN KEY ("itineraryItemId") REFERENCES "ItineraryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripCountryVisit" ADD CONSTRAINT "TripCountryVisit_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripCountryVisit" ADD CONSTRAINT "TripCountryVisit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateCloneEvent" ADD CONSTRAINT "TemplateCloneEvent_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "PublicTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateCloneEvent" ADD CONSTRAINT "TemplateCloneEvent_clonedByUserId_fkey" FOREIGN KEY ("clonedByUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripActivityLog" ADD CONSTRAINT "TripActivityLog_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripActivityLog" ADD CONSTRAINT "TripActivityLog_actorUserId_fkey" FOREIGN KEY ("actorUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
